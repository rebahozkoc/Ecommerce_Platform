import 'package:flutter/material.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/extension/string_extension.dart';
import 'package:mobile/core/widgets/productItems/large_product.dart';
import 'package:mobile/core/widgets/search_button.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/categories/model/category_model.dart';
import 'package:mobile/view/categories/view/categories_shimmer_view.dart';
import 'package:mobile/view/categories/viewmodel/category_view_model.dart';

class CategoryView extends StatefulWidget {
  final CategoryModel category;
  const CategoryView({Key? key, required this.category}) : super(key: key);

  @override
  State<CategoryView> createState() => _CategoryViewState();
}

class _CategoryViewState extends BaseState<CategoryView> {
  late CategoryViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<CategoryViewModel>(),
      onModelReady: (dynamic model) async {
        model.setContext(context);
        model.init();
        viewModel = model;
        viewModel.category = widget.category;
      },
      onPageBuilder: (context, value) {
        return FutureBuilder(
            future: viewModel.getData(),
            builder: ((context, snapshot) => snapshot.hasData
                ? Scaffold(
                    appBar: _appBar(),
                    body: _body(),
                  )
                : const CategoriesShimmerView()));
      },
    );
  }

  AppBar _appBar() {
    return AppBar(
      title: Text(viewModel.category.title!.titleCase()),
    );
  }

  SizedBox _body() => SizedBox(
        width: double.infinity,
        child: SingleChildScrollView(
          child: Column(
            children: [
              const SearchButtonWidget(),
              _gridView(),
            ],
          ),
        ),
      );

  GridView _gridView() => GridView.count(
        shrinkWrap: true,
        crossAxisCount: 2,
        childAspectRatio: 24 / 37,
        crossAxisSpacing: 16,
        mainAxisSpacing: 16,
        physics: const NeverScrollableScrollPhysics(),
        padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
        children:
            viewModel.products.map((product) => LargeProduct(product: product)).toList(),
      );
}
