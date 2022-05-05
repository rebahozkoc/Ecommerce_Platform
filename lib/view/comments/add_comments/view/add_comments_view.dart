import 'package:flutter/material.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/comments/add_comments/viewmodel/add_comments_view_model.dart';

class AddCommentsView extends StatefulWidget {
  const AddCommentsView({ Key? key }) : super(key: key);

  @override
  State<AddCommentsView> createState() => _AddCommentsViewState();
}

class _AddCommentsViewState extends BaseState<AddCommentsView> {
  late AddCommentsViewModel viewModel;
  
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<AddCommentsViewModel>(),
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
        title: const Text("All Comments"),
      );

  Center _body() => const Center(
        child: Text("Comments"),
      );




}
