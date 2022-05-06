// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'category_view_model.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$CategoryViewModel on _CategoryViewModelBase, Store {
  final _$productsAtom = Atom(name: '_CategoryViewModelBase.products');

  @override
  ObservableList<ProductModel> get products {
    _$productsAtom.reportRead();
    return super.products;
  }

  @override
  set products(ObservableList<ProductModel> value) {
    _$productsAtom.reportWrite(value, super.products, () {
      super.products = value;
    });
  }

  final _$_CategoryViewModelBaseActionController =
      ActionController(name: '_CategoryViewModelBase');

  @override
  void setProducts(List<ProductModel> products) {
    final _$actionInfo = _$_CategoryViewModelBaseActionController.startAction(
        name: '_CategoryViewModelBase.setProducts');
    try {
      return super.setProducts(products);
    } finally {
      _$_CategoryViewModelBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  void addNewproduct(ProductModel product) {
    final _$actionInfo = _$_CategoryViewModelBaseActionController.startAction(
        name: '_CategoryViewModelBase.addNewproduct');
    try {
      return super.addNewproduct(product);
    } finally {
      _$_CategoryViewModelBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    return '''
products: ${products}
    ''';
  }
}
