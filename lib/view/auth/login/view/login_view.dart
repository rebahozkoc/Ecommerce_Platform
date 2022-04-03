import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/extension/string_extension.dart';
import 'package:mobile/core/init/lang/locale_keys.g.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/auth/login/viewmodel/login_view_model.dart';

class LoginView extends StatefulWidget {
  const LoginView({Key? key}) : super(key: key);

  @override
  State<LoginView> createState() => _LoginViewState();
}

class _LoginViewState extends State<LoginView> {
  late LoginViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<LoginViewModel>(),
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

  Center _body() => Center(
        child: ListView(
          shrinkWrap: true,
          padding: const EdgeInsets.only(left: 24.0, right: 24.0),
          children: <Widget>[
            title,
            const SizedBox(height: 48.0),
            email,
            const SizedBox(height: 16.0),
            password,
            const SizedBox(height: 24.0),
            loginButton,
            forgotLabel,
            register,
          ],
        ),
      );

  final title = Text(
    LocaleKeys.login.locale,
    style: const TextStyle(
      color: Color(0xFFFF6600),
      fontSize: 48,
      fontWeight: FontWeight.w500,
    ),
  );

  final email = TextFormField(
    keyboardType: TextInputType.emailAddress,
    autofocus: false,
    decoration: InputDecoration(
      hintText: LocaleKeys.email.locale,
      contentPadding: const EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(32.0)),
    ),
  );

  final password = TextFormField(
    autofocus: false,
    obscureText: true,
    decoration: InputDecoration(
      hintText: LocaleKeys.password.locale,
      contentPadding: const EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(32.0)),
    ),
  );

  final loginButton = Padding(
    padding: const EdgeInsets.symmetric(vertical: 16.0),
    child: RaisedButton(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(24),
      ),
      onPressed: () {},
      padding: const EdgeInsets.all(12),
      color: const Color(0xFFFF6600),
      child: Text(LocaleKeys.login.locale,
          style: const TextStyle(color: Colors.white)),
    ),
  );

  final register = Row(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Text(
        LocaleKeys.dontAccount.locale,
        style: TextStyle(
          color: Colors.black.withOpacity(0.5),
          fontSize: 16.0,
        ),
      ),
      TextButton(
        onPressed: () {},
        child: Text(
          LocaleKeys.signUp.locale,
          style: const TextStyle(
            color: Color(0xFFFF944D),
            fontSize: 16.0,
          ),
        ),
      ),
    ],
  );
  final forgotLabel = TextButton(
    child: Text(
      LocaleKeys.forgotPassword.locale,
      style: const TextStyle(color: Colors.black54),
    ),
    onPressed: () {},
  );
}
