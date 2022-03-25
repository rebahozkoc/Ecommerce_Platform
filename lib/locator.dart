import 'package:get_it/get_it.dart';


GetIt locator = GetIt.instance;

///  The "get_it" library is required to automatically install lazy singleton , singleton architectures.

Future<void> setupLocator() async {

}

Future<void> resetLocator() async {
  await locator.reset();
  await setupLocator();
}
