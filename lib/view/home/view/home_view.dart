import 'package:flutter/material.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/extension/string_extension.dart';
import 'package:mobile/core/init/lang/locale_keys.g.dart';
import 'package:mobile/view/Home/viewmodel/home_view_model.dart';

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
      viewModel: HomeViewModel(),
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
      title: Text(LocaleKeys.defaultText.locale),
    );
  }

  Center _body() => Center(
        child: Text(LocaleKeys.defaultText.locale),
      );
}
