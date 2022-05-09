import 'package:flutter/material.dart';
import 'package:flutter_mobx/flutter_mobx.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/core/widgets/productItems/large_product.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/search/viewmodel/search_view_model.dart';

class SearchView extends StatefulWidget {
  const SearchView({Key? key}) : super(key: key);

  @override
  State<SearchView> createState() => _SearchViewState();
}

class _SearchViewState extends BaseState<SearchView> {
  late SearchViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<SearchViewModel>(),
      onModelReady: (dynamic model) async {
        model.setContext(context);
        model.init();
        viewModel = model;
      },
      onPageBuilder: (context, value) {
        return Scaffold(
          body: _body(),
        );
      },
    );
  }

  CustomScrollView _body() => CustomScrollView(
        slivers: [
          _appBar(),
          _content(),
        ],
      );

  SliverAppBar _appBar() {
    return SliverAppBar(
        backgroundColor: const Color(0xFFECEDF5),
        floating: true,
        pinned: true,
        snap: false,
        centerTitle: true,
        title: const Text("Search"),
        bottom: _search());
  }

  AppBar _search() {
    return AppBar(
      automaticallyImplyLeading: false,
      title: Container(
        margin: const EdgeInsets.fromLTRB(0, 48, 0, 48),
        width: double.infinity,
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
        child: TextFormField(
          cursorColor: AppColors.primary,
          onChanged: (text) => viewModel.onTextChanged(),
          keyboardType: TextInputType.text,
          textInputAction: TextInputAction.search,
          autocorrect: false,
          focusNode: viewModel.searchNode,
          controller: viewModel.searchController,
          decoration: const InputDecoration(
            contentPadding: EdgeInsets.only(top: 28, left: 12),
            suffixIcon: Icon(
              Icons.search,
              color: AppColors.darkGray,
            ),
            floatingLabelAlignment: FloatingLabelAlignment.center,
            hintText: "Search...",
            hintStyle: TextStyle(color: AppColors.darkGray, fontSize: 14),
            enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide.none),
            disabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide.none),
            focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(8)),
                borderSide: BorderSide.none),
          ),
        ),
      ),
    );
  }

  Observer _content() => Observer(
      builder: (BuildContext context) =>
          !viewModel.isSearchEmpty ? _gridView() : _emptyInfo());

  SliverFillRemaining _emptyInfo() {
    return SliverFillRemaining(
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(
              Icons.search,
              size: 48,
            ),
            Padding(
              padding: EdgeInsets.fromLTRB(12,20,12,0),
              child: Text(
                "Don't worry results will be listed here as you search",
                textAlign: TextAlign.center,
                style: TextStyle(color: AppColors.tertiary,fontSize: 22),
              ),
            )
          ],
        ),
      ),
    );
  }

  SliverPadding _gridView() => SliverPadding(
        padding: const EdgeInsets.fromLTRB(16, 16, 16, 12),
        sliver: SliverGrid.count(
          crossAxisCount: 2,
          childAspectRatio: 24 / 37,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
          children:  const [
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
      );
}
