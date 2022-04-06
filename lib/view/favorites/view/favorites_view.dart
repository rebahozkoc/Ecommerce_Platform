import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/extension/string_extension.dart';
import 'package:mobile/core/init/lang/locale_keys.g.dart';
import 'package:mobile/core/widgets/productItems/large_product.dart';
import 'package:mobile/core/widgets/search_button.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/favorites/view/favorites_shimmer_view.dart';
import 'package:mobile/view/favorites/viewmodel/favorites_view_model.dart';

class FavoritesView extends StatefulWidget {
  const FavoritesView({Key? key}) : super(key: key);

  @override
  State<FavoritesView> createState() => _FavoritesViewState();
}

class _FavoritesViewState extends State<FavoritesView> {
  late FavoritesViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<FavoritesViewModel>(),
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
                : const FavoritesShimmerView()));
      },
    );
  }

  AppBar _appBar() {
    return AppBar(
      title: Text(LocaleKeys.favorites.locale),
    );
  }

  SizedBox _body() => SizedBox(
        width: double.infinity,
        child: SingleChildScrollView(
          child: Column(
            children: [
              const SearchButtonWidget(),
              GridView.count(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
                shrinkWrap: true,
                childAspectRatio: 24 / 37,
                crossAxisSpacing: 16,
                mainAxisSpacing: 16,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisCount: 2,
                children: const [
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                  LargeProduct(),
                ],
              ),
            ],
          ),
        ),
      );
}
