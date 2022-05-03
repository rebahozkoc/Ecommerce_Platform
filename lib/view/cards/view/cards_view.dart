import 'package:flutter/material.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/core/widgets/productItems/cards_widget.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/cards/viewmodel/cards_view_model.dart';

class CardsView extends StatefulWidget {
  const CardsView({Key? key}) : super(key: key);

  @override
  State<CardsView> createState() => _CardsViewState();
}

class _CardsViewState extends BaseState<CardsView> {
  int count = 2;
  late CardsViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<CardsViewModel>(),
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

  AppBar _appBar() => AppBar(
        title: const Text("Cards Method"),
      );

  SizedBox _body() => SizedBox(
        width: double.infinity,
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [_title(), _cards()],
          ),
        ),
      );

  Padding _title() => Padding(
        padding: const EdgeInsets.fromLTRB(16, 24, 0, 24),
        child: Text(
          "My Saved Cards ($count)",
          style: const TextStyle(
            color: AppColors.darkGray,
            fontSize: 28,
            fontWeight: FontWeight.w600,
          ),
        ),
      );

  Padding _cards() => Padding(
        padding: const EdgeInsets.fromLTRB(16, 8, 16, 16),
        child: SizedBox(
          height: 150,
          width: double.infinity,
          child: ListView.separated(
            primary: true,
            shrinkWrap: true,
            scrollDirection: Axis.horizontal,
            itemCount: count,
            itemBuilder: (context, index) => const CardsWidget(),
            separatorBuilder: (context, index) => const SizedBox(width: 16),
          ),
        ),
      );
}
