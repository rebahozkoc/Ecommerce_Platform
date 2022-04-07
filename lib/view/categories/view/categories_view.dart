import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/extension/string_extension.dart';
import 'package:mobile/core/init/lang/locale_keys.g.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/categories/view/categories_shimmer_view.dart';
import 'package:mobile/view/categories/viewmodel/categories_view_model.dart';

class CategoriesView extends StatefulWidget {
  const CategoriesView({Key? key}) : super(key: key);

  @override
  State<CategoriesView> createState() => _CategoriesViewState();
}

class _CategoriesViewState extends State<CategoriesView> {
  late CategoriesViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<CategoriesViewModel>(),
      onModelReady: (dynamic model) async {
        model.setContext(context);
        model.init();
        viewModel = model;
      },
      onPageBuilder: (context, value) {
        return FutureBuilder(
            future: viewModel.load(),
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
      title: Text(LocaleKeys.categories.locale),
    );
  }

  Center _body() => Center(
        child: Text(LocaleKeys.categories.locale),
      );
}
