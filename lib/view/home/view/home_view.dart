import 'package:flutter/material.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/extension/string_extension.dart';
import 'package:mobile/core/init/lang/locale_keys.g.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/core/widgets/customScrollPhysics.dart';
import 'package:mobile/core/widgets/productItems/large_product.dart';
import 'package:mobile/core/widgets/productItems/medium_product.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/home/viewmodel/home_view_model.dart';

class HomeView extends StatefulWidget {
  const HomeView({Key? key}) : super(key: key);

  @override
  State<HomeView> createState() => _HomeViewState();
}

class _HomeViewState extends BaseState<HomeView> {
  late HomeViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<HomeViewModel>(),
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
      title: Text(LocaleKeys.explore.locale),
    );
  }

  SizedBox _body() => SizedBox(
        width: double.infinity,
        child: SingleChildScrollView(
          child: Column(
            children: [
              _search(),
              _highlights(),
              _categories(),
              _categories(),
              const SizedBox(height: 12,)
            ],
          ),
        ),
      );

  Container _search() {
    return Container(
      margin: const EdgeInsets.fromLTRB(16, 0, 16, 24),
      padding: const EdgeInsets.symmetric(horizontal: 16),
      width: MediaQuery.of(context).size.width,
      height: 48,
      decoration: const BoxDecoration(
        color: AppColors.white,
        borderRadius: BorderRadius.all(Radius.circular(8)),
        boxShadow: [
          BoxShadow(
            color: Color(0x19575B7D),
            spreadRadius: 0,
            blurRadius: 12,
            offset: Offset(0, 4),
          ),
        ],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: const [
          Text(
            "Search...",
            style: TextStyle(
              color: AppColors.darkGray,
            ),
          ),
          Icon(
            Icons.search,
            color: AppColors.darkGray,
          )
        ],
      ),
    );
  }

  SizedBox _highlights() {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      height: 340,
      child: ListView.builder(
        primary: true,
        scrollDirection: Axis.horizontal,
        physics: const CustomScrollPhysics(itemDimension: 258),
        itemCount: 5,
        itemBuilder: (context, index) => const LargeProduct(),
      ),
    );
  }

  Container _categories() => Container(
        margin: const EdgeInsets.only(top: 24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          mainAxisSize: MainAxisSize.max,
          children: [_infos(), _productMediumContainer()],
        ),
      );

  SizedBox _productMediumContainer() {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      height: 185,
      child: ListView.builder(
        primary: true,
        scrollDirection: Axis.horizontal,
        itemCount: 8,
        itemBuilder: (context, index) => const MediumProduct(),
      ),
    );
  }

  Container _infos() {
    return Container(
      margin: const EdgeInsets.fromLTRB(16, 0, 16, 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const Text(
            "Popular Item",
            style: TextStyle(
              color: AppColors.tertiary,
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ),
          InkWell(
            onTap: (() {
              debugPrint("See All Button Clicked");
            }),
            child: const Text(
              "See All",
              style: TextStyle(
                color: AppColors.primary,
                fontSize: 12,
                fontWeight: FontWeight.w400,
              ),
            ),
          )
        ],
      ),
    );
  }
}
