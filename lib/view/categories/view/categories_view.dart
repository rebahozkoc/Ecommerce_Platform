import 'package:flutter/material.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/extension/string_extension.dart';
import 'package:mobile/core/init/lang/locale_keys.g.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/core/widgets/search_button.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/categories/view/categories_shimmer_view.dart';
import 'package:mobile/view/categories/viewmodel/categories_view_model.dart';

class CategoriesView extends StatefulWidget {
  const CategoriesView({Key? key}) : super(key: key);

  @override
  State<CategoriesView> createState() => _CategoriesViewState();
}

class _CategoriesViewState extends BaseState<CategoriesView> {
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
        crossAxisCount: 2,
        padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
        physics: const NeverScrollableScrollPhysics(),
        shrinkWrap: true,
        childAspectRatio: 24 / 28,
        crossAxisSpacing: 20,
        mainAxisSpacing: 20,
        children: [
          _categoryContainer(),
          _categoryContainer(),
          _categoryContainer(),
          _categoryContainer(),
          _categoryContainer(),
          _categoryContainer(),
        ],
      );

  Container _categoryContainer() => Container(
        padding: const EdgeInsets.symmetric(horizontal: 12),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(8),
          color: AppColors.white,
          boxShadow: const [
            BoxShadow(
              color: Color(0x19575B7D),
              spreadRadius: 0,
              blurRadius: 12,
              offset: Offset(0, 4),
            ),
          ],
        ),
        child: Column(
          children: [
            AspectRatio(
              aspectRatio: 1,
              child: Container(
                color: Colors.grey,
              ),
            ),
            const Text(
              "Category",
              style: TextStyle(
                height: 2,
                fontSize: 18,
                fontWeight: FontWeight.w500,
                color: AppColors.tertiary
              ),
            )
          ],
        ),
      );
}
