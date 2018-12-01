var express = require('express');
var router = express.Router();
var mysql = require('mysql');

function dbrun(sql, back) {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'blog2'
  });
  connection.connect();
  connection.query(sql, function (error, results, fields) {
    if (error)
      throw error;
    back(results)
  });
}

router.post('/write_article', function (req, res, next) {
  var title = req.body.title
  var content = req.body.content
  dbrun(`INSERT INTO 文章 (标题, 内容) VALUES (${title}, ${content})`, function (data) {
    res.end('操作成功')
  })
});
router.post('/get_all_article_list', function (req, res, next) {
  dbrun('select id,标题 from 文章', function (data) {
    res.end(JSON.stringify(data))
  })
});
router.post('/get_all_article_details_by_id', function (req, res, next) {
  var id = req.body.id
  dbrun(`select 标题,内容 from 文章 where id=${id}`, function (data) {
    res.end(JSON.stringify(data[0]))
  })
});

module.exports = router;
