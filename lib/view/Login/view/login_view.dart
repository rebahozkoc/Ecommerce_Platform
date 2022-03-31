import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  @override
  Widget build(BuildContext context) {
    final title = Text(
      "Login",
      style: TextStyle(
        color: const Color(0xFFFF6600),
        fontSize: 48,
        fontWeight: FontWeight.w500,

      ),
    );

    final email = TextFormField(
      keyboardType: TextInputType.emailAddress,
      autofocus: false,
      decoration: InputDecoration(
        hintText: "Email",
        contentPadding: EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(32.0)),
      ),
    );

    final password = TextFormField(
      autofocus: false,
      obscureText: true,
      decoration: InputDecoration(
        hintText: "Password",
        contentPadding: EdgeInsets.fromLTRB(20.0, 10.0, 20.0, 10.0),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(32.0)),
      ),
    );

    final loginButton = Padding(
      padding: EdgeInsets.symmetric(vertical: 16.0),
      child: RaisedButton(
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(24),
        ),
        onPressed: () {},
        padding: EdgeInsets.all(12),
        color: const Color(0xFFFF6600),
        child: Text('Log In', style: TextStyle(color: Colors.white)),
      ),
    );

    final register = Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          "Don't you have an account?",
          style: TextStyle(
            color: Colors.black.withOpacity(0.5),
            fontSize: 16.0,
          ),
        ),
        TextButton(
          onPressed: (){},
          child: Text(
            "Register now",
            style: TextStyle(
              color: const Color(0xFFFF944D),
              fontSize: 16.0,
            ),
          ),
        ),
      ],
    );

    final forgotLabel = TextButton(
      child: Text(
        'Forgot password?',
        style: TextStyle(color: Colors.black54),
      ),
      onPressed: () {},
    );

    return Scaffold(
      backgroundColor: Colors.white,
      body: Center(
        child: ListView(
          shrinkWrap: true,
          padding: EdgeInsets.only(left: 24.0, right: 24.0),
          children: <Widget>[
            title,
            SizedBox(height: 48.0),
            email,
            SizedBox(height: 16.0),
            password,
            SizedBox(height: 24.0),
            loginButton,
            forgotLabel,
            register,
          ],
        ),
      ),
    );
  }
}
