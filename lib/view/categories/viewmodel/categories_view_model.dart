import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/categories/model/category_model.dart';
import 'package:mobile/view/categories/repository/category_repository.dart';
import 'package:mobx/mobx.dart';
part 'categories_view_model.g.dart';

class CategoriesViewModel = _CategoriesViewModelBase with _$CategoriesViewModel;

abstract class _CategoriesViewModelBase with Store, BaseViewModel {
  late CategoryRepository _repository;
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {
    _repository = locator<CategoryRepository>();
  }

  void dispose() {}

  @observable
  late CategoryModel categoryModel;

  Future<bool> getData() async {
    categoryModel = await _repository.getCategories(
      context: context,
    );

    return categoryModel.isSuccess!;
  }
}
