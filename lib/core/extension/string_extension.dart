import 'package:easy_localization/easy_localization.dart';
import 'package:mobile/core/constants/app/app_constants.dart';


extension StringLocalization on String {
  String get locale => this.tr();

  bool get isValidEmails => RegExp(ApplicationConstants.EMAIL_REGEX).hasMatch(this);
}

extension ImagePathExtension on String {
  String get toSVG => 'assets/svg/$this.svg';
}
