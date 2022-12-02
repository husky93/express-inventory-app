const Category = require('../models/category');
const Item = require('../models/item');
const async = require('async');

exports.index = (req, res, next) => {
  Category.find()
    .sort([['title', 'ascending']])
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

exports.category_detail = (req, res, next) => {
  async.parallel(
    {
      category(callback) {
        Category.findById(req.params.id).exec(callback);
      },
      category_items(callback) {
        Item.find({ category: req.params.id }).exec(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.category == null) {
        const error = new Error('Category not found');
        error.status = 404;
        return next(error);
      }
      res.render('category_details', {
        title: results.category.title,
        category: results.category,
        category_items: results.category_items,
      });
    }
  );
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