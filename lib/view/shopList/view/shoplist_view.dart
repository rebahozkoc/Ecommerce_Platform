import 'package:flutter/material.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/extension/string_extension.dart';
import 'package:mobile/core/init/lang/locale_keys.g.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/shopList/viewmodel/shoplist_view_model.dart';
import 'package:mobile/core/widgets/productItems/shopping_cart_product.dart';

class ShopListView extends StatefulWidget {
  const ShopListView({Key? key}) : super(key: key);

  @override
  State<ShopListView> createState() => _ShopListViewState();
}

class _ShopListViewState extends BaseState<ShopListView> {
  late ShopListViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<ShopListViewModel>(),
      onModelReady: (dynamic model) async {
        model.setContext(context);
        model.init();
        viewModel = model;
      },
      onPageBuilder: (context, value) {
        return Scaffold(
          appBar: _appBar(),
          body: _body(),
        );
      },
    );
  }

  AppBar _appBar() {
    return AppBar(
      title: Text(LocaleKeys.shopList.locale),
      actions: [
        IconButton(
          onPressed: () => viewModel.navigateToPayment(),
          icon: const Icon(Icons.payment),
        )
      ],
    );
  }

  Center _body() => Center(
          child: SingleChildScrollView(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          mainAxisSize: MainAxisSize.max,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: const [
            CartProduct(),
            CartProduct(),
            CartProduct(),
            CartProduct(),
            CartProduct(),
          ],
        ),
      ));
}
