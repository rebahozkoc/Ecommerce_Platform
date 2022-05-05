// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'categories_view_model.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$CategoriesViewModel on _CategoriesViewModelBase, Store {
  final _$categoryModelAtom =
      Atom(name: '_CategoriesViewModelBase.categoryModel');

  @override
  CategoryModel get categoryModel {
    _$categoryModelAtom.reportRead();
    return super.categoryModel;
  }

  @override
  set categoryModel(CategoryModel value) {
    _$categoryModelAtom.reportWrite(value, super.categoryModel, () {
      super.categoryModel = value;
    });
  }

  @override
  String toString() {
    return '''
categoryModel: ${categoryModel}
    ''';
  }
}
