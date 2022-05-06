import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/core/widgets/ToastMessage.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/categories/model/category_model.dart';
import 'package:mobile/view/categories/repository/category_repository.dart';
import 'package:mobile/view/product/model/product_model.dart';
import 'package:mobx/mobx.dart';
part 'category_view_model.g.dart';

class CategoryViewModel = _CategoryViewModelBase with _$CategoryViewModel;

abstract class _CategoryViewModelBase with Store, BaseViewModel {
  late CategoryModel category;
  late CategoryRepository _repository;
  late CategoryResponseModel _categoryResponseModel;

  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {
    _repository = locator<CategoryRepository>();
  }

  @observable
  var products = ObservableList<ProductModel>();

  void dispose() {}

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

  Future<bool> getData() async {
    _categoryResponseModel = await _repository.getCategory(
      context: context,
      id: category.id,
    );
    debugPrint(_categoryResponseModel.isSuccess.toString());
    if (_categoryResponseModel.isSuccess ?? false) {
      setProducts(_categoryResponseModel.data!.products!);
    } else {
      showToast(
          context: context!,
          message: _categoryResponseModel.message ??
              ApplicationConstants.ERROR_MESSAGE,
          isSuccess: false);
    }

    return _categoryResponseModel.isSuccess!;
  }
}
