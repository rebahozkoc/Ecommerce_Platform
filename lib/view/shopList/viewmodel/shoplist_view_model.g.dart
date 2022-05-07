// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'shoplist_view_model.dart';

// **************************************************************************
// StoreGenerator
// **************************************************************************

// ignore_for_file: non_constant_identifier_names, unnecessary_brace_in_string_interps, unnecessary_lambdas, prefer_expression_function_bodies, lines_longer_than_80_chars, avoid_as, avoid_annotating_with_dynamic

mixin _$ShopListViewModel on _ShopListViewModelBase, Store {
  final _$shopListAtom = Atom(name: '_ShopListViewModelBase.shopList');

  @override
  ObservableList<ShopListItem> get shopList {
    _$shopListAtom.reportRead();
    return super.shopList;
  }

  @override
  set shopList(ObservableList<ShopListItem> value) {
    _$shopListAtom.reportWrite(value, super.shopList, () {
      super.shopList = value;
    });
  }

  final _$_ShopListViewModelBaseActionController =
      ActionController(name: '_ShopListViewModelBase');

  @override
  void setShopList(List<ShopListItem> shopList) {
    final _$actionInfo = _$_ShopListViewModelBaseActionController.startAction(
        name: '_ShopListViewModelBase.setShopList');
    try {
      return super.setShopList(shopList);
    } finally {
      _$_ShopListViewModelBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  void addNewShop(ShopListItem shopItem) {
    final _$actionInfo = _$_ShopListViewModelBaseActionController.startAction(
        name: '_ShopListViewModelBase.addNewShop');
    try {
      return super.addNewShop(shopItem);
    } finally {
      _$_ShopListViewModelBaseActionController.endAction(_$actionInfo);
    }
  }

  @override
  String toString() {
    return '''
shopList: ${shopList}
    ''';
  }
}
