import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/core/widgets/ToastMessage.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/favorites/model/favorites_model.dart';
import 'package:mobile/view/favorites/repository/favorites_repository.dart';
import 'package:mobile/view/product/model/product_model.dart';
import 'package:mobile/view/product/repository/product_repository.dart';
import 'package:mobx/mobx.dart';
part 'favorites_view_model.g.dart';

class FavoritesViewModel = _FavoritesViewModelBase with _$FavoritesViewModel;

abstract class _FavoritesViewModelBase with Store, BaseViewModel {
  late FavoritesModel favorites;
  late FavoritesRepository _repository;
  late FavoritesResponseModel _favoritesResponseModel;
  late ProductRepository _repositoryProduct;
  late ProductResponseModel _productResponseModel;
  late ProductModel product;


  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {
    _repository = locator<FavoritesRepository>();
    _repositoryProduct = locator<ProductRepository>();
  }

  @observable
  var products = ObservableList<ProductModel>();

  @action
  void setProducts(List<ProductModel> products) {
    this.products.clear();
    for (var product in products) {
      addNewproduct(product);
    }
  }

  @action
  void addNewproduct(ProductModel product) {
    products.add(product);
  }

  void dispose() {}

  Future<bool> load() async =>
      await Future.delayed(const Duration(milliseconds: 500), () {
        return true;
      });

  Future<bool> getData() async {
    _productResponseModel = await _repositoryProduct.getProduct(
      context: context,
      id: product.id,
    );
    if (_productResponseModel.isSuccess ?? false) {
      setProducts();
    } else {
      showToast(
          context: context!,
          message: _favoritesResponseModel.message ??
              ApplicationConstants.ERROR_MESSAGE,
          isSuccess: false);
    }
    return _favoritesResponseModel.isSuccess!;
  }
}
