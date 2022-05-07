import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobile/core/widgets/ToastMessage.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/comments/view/comments_view.dart';
import 'package:mobile/view/product/model/product_model.dart';
import 'package:mobile/view/product/repository/product_repository.dart';
import 'package:mobx/mobx.dart';
import 'package:persistent_bottom_nav_bar/persistent-tab-view.dart';
part 'product_view_model.g.dart';

class ProductViewModel = _ProductViewModelBase with _$ProductViewModel;

abstract class _ProductViewModelBase with Store, BaseViewModel {
  late ProductModel product;
  late ProductRepository _repository;
  late ProductResponseModel _productResponseModel;

  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {
    _repository = locator<ProductRepository>();
  }

  void dispose() {}

  Future<bool> getData() async {
    _productResponseModel = await _repository.getProduct(
      context: context,
      id: product.id,
    );
    return _productResponseModel.isSuccess ?? false;
  }

  void navigateToCommentsView(BuildContext context) =>
      pushNewScreenWithRouteSettings(
        context,
        screen: const CommentsView(),
        settings: const RouteSettings(name: NavigationConstants.COMMENTS),
        withNavBar: true,
        pageTransitionAnimation: PageTransitionAnimation.cupertino,
      );
}
