import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/extension/string_extension.dart';
import 'package:mobile/core/init/lang/locale_keys.g.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/core/widgets/productItems/product_page_product.dart';
import 'package:mobile/view/product/viewmodel/product_view_model.dart';

class ProductView extends StatefulWidget {
  const ProductView({Key? key}) : super(key: key);

  @override
  State<ProductView> createState() => _ProductViewState();
}

class _ProductViewState extends State<ProductView> {
  late ProductViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<ProductViewModel>(),
      onModelReady: (dynamic model) async{
        model.setContext(context);
        model.init();
        viewModel = model;
      },
      onPageBuilder: (context, value){
        return Scaffold(
          appBar: _appBar(),
          body: _body(),
        );
      },
    );
  }

  AppBar _appBar(){
    return AppBar(
      title: Text("Product Details"),
    );
  }

  SizedBox _body() => SizedBox(
    width: double.infinity,
    child: SingleChildScrollView(
      child: Column(
        children: [
          PageProduct(),
          Column(
            children: [
              Container(
                color: AppColors.white,
                child: Column(
                  children: [
                    ProductDetails(),
                  ],
                ),
              ),
            ],
          ),
        ],
      )
    ),
  );
}

class ProductDetails extends StatelessWidget {
  const ProductDetails({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
            padding: EdgeInsets.symmetric(horizontal: 20),
          child: Text(
            "Product Title",
            style: Theme.of(context).textTheme.bodyMedium,
          ),
        ),
      ],
    );
  }
}

