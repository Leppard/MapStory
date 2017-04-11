router.get('/storySearch', function(req, res) {
     var wd = req.query.wd;
     client=usr.connect();
         result=null;
         usr.searchStory(client, wd, function (results) {
             if(results[0]===undefined){
                 res.send('没有查到该记录');
             }
             res.send(results);
         });
     res.render('storySearch', { word:wd, result:results });
 });

 module.exports = router;