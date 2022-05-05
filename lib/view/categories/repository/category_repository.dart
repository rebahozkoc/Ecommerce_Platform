import 'package:flutter/material.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/categories/model/category_model.dart';
import 'package:mobile/view/categories/service/category_service.dart';
import 'package:mobile/view/categories/service/category_service_base.dart';

class CategoryRepository with CategoryServiceBase {
  final _service = locator<CategoryService>();

  @override
  Future<CategoryModel> getCategories({
    BuildContext? context,
    int? skip,
    int? limit,
  }) async {
    CategoryModel _responseModel = await _service.getCategories(
      context: context,
      skip: skip ?? ApplicationConstants.CATEGORY_SKIP,
      limit: limit ?? ApplicationConstants.CATEGORY_LIMIT,
    );
    return _responseModel;
  }
}
