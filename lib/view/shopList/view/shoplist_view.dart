import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/extension/string_extension.dart';
import 'package:mobile/core/init/lang/locale_keys.g.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
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
        return FutureBuilder(
            future: viewModel.getData(),
            builder: ((context, snapshot) => snapshot.hasData
                ? Scaffold(
                    appBar: _appBar(),
                    body: _body(),
                  )
                : const Scaffold()));
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
        child: Stack(
          children: <Widget>[
            ListView.builder(
                itemCount: 8,
                itemBuilder: (context, index) {
                  return Observer(builder: (_) {
                    return CartProduct(
                      shopItem: viewModel.shopList[index],
                    );
                  });
                }),
            Align(
              alignment: Alignment.bottomCenter,
              child: Container(
                width: double.infinity,
                height: 60,
                decoration: const BoxDecoration(
                    color: AppColors.primary,
                    borderRadius: BorderRadius.only(
                      topLeft: Radius.circular(16.0),
                      topRight: Radius.circular(16.0),
                    )),
                child: Padding(
                  padding: const EdgeInsets.only(
                    left: 20,
                    right: 20,
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          RichText(
                              text: const TextSpan(children: [
                            TextSpan(
                                text: "Total: ",
                                style: TextStyle(
                                  color: AppColors.black,
                                  fontWeight: FontWeight.w700,
                                  fontSize: 16,
                                )),
                            TextSpan(
                                text: "310 TL",
                                style: TextStyle(
                                  fontSize: 16,
                                  fontWeight: FontWeight.bold,
                                  color: AppColors.white,
                                ))
                          ])),
                          _completeShopping(),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            )
          ],
        ),
      );

  OutlinedButton _completeShopping() => OutlinedButton(
        onPressed: () => viewModel.navigateToPayment(),
        child: const Text(
          "Buy Now",
          style: TextStyle(
            color: AppColors.black,
            fontSize: 14,
            fontWeight: FontWeight.w700,
          ),
        ),
        style: OutlinedButton.styleFrom(
            backgroundColor: AppColors.white,
            primary: AppColors.white,
            fixedSize: const Size(150, 50),
            side: const BorderSide(width: 1.0, color: AppColors.white)),
      );
}
