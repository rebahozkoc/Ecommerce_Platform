import 'package:flutter/material.dart';
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
        slivers: [_appBar(), _gridView()],
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
          decoration: const InputDecoration(
            contentPadding: EdgeInsets.only(top:28,left: 12),
            suffixIcon: Icon(Icons.search,color: AppColors.darkGray,),
            floatingLabelAlignment: FloatingLabelAlignment.center,
            hintText: "Search...",
            hintStyle: TextStyle(color: AppColors.darkGray,fontSize: 14),
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

  SliverPadding _gridView() => SliverPadding(
        padding: const EdgeInsets.fromLTRB(16, 16, 16, 12),
        sliver: SliverGrid.count(
          crossAxisCount: 2,
          childAspectRatio: 24 / 37,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
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
                  color: AppColors.tertiary),
            )
          ],
        ),
      );
}
