const Category = require('../models/category');

exports.index = (req, res, next) => {
  Category.find()
    .sort([['name', 'ascending']])
    .exec((err, categories_list) => {
      if (err) {
        return next(err);
      }
      res.render('categories', {
        title: 'Categories',
        categories_list,
      });
    });
};

exports.category_detail = (req, res) => {
  res.send('NOT IMPLEMENTED: Category Detail GET');
};

exports.category_delete_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Category Delete GET');
};

exports.category_delete_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Category Detail POST');
};

exports.category_create_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Category Create GET');
};

exports.category_create_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Category Create POST');
};

exports.category_update_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Category Update GET');
};

exports.category_update_post = (req, res) => {
  res.send('NOT IMPLEMENTED: Category Update POST');
};
