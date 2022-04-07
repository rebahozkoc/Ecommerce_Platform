import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobx/mobx.dart';
part 'categories_view_model.g.dart';

class CategoriesViewModel = _CategoriesViewModelBase with _$CategoriesViewModel;

abstract class _CategoriesViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}

  Future<bool> load() async =>
      await Future.delayed(const Duration(milliseconds: 500), () {
        return true;
      });
}
