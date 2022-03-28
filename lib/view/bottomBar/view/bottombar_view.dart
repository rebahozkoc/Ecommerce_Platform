import 'package:flutter/material.dart';
import 'package:mobile/view/home/view/home_view.dart';
import 'package:persistent_bottom_nav_bar/persistent-tab-view.dart';

class BottomBarView extends StatelessWidget {
  const BottomBarView({Key? key}) : super(key: key);

  List<Widget> _buildScreens() {
    return [
      const HomeView(),
      const HomeView(),
      const HomeView(),
      const HomeView(),
      const HomeView(),
    ];
  }

  List<PersistentBottomNavBarItem> _navBarItems() {
    return [
      PersistentBottomNavBarItem(
          icon: const Icon(Icons.home),
          inactiveIcon: const Icon(Icons.home_outlined),
          iconSize: 28,
          activeColorPrimary: const Color(0xFFFF6600),
          inactiveColorPrimary: const Color(0xFFD8D8D8)),
      PersistentBottomNavBarItem(
          icon: const Icon(Icons.grid_view_rounded),
          inactiveIcon: const Icon(Icons.grid_view_outlined),
          iconSize: 28,
          activeColorPrimary: const Color(0xFFFF6600),
          inactiveColorPrimary: const Color(0xFFD8D8D8)),
      PersistentBottomNavBarItem(
          icon: const Icon(Icons.shopping_cart),
          inactiveIcon: const Icon(Icons.shopping_cart_outlined),
          iconSize: 28,
          activeColorPrimary: const Color(0xFFFF6600),
          inactiveColorPrimary: const Color(0xFFD8D8D8)),
      PersistentBottomNavBarItem(
          icon: const Icon(Icons.favorite_rounded),
          inactiveIcon: const Icon(Icons.favorite_outline_rounded),
          iconSize: 28,
          activeColorPrimary: const Color(0xFFFF6600),
          inactiveColorPrimary: const Color(0xFFD8D8D8)),
      PersistentBottomNavBarItem(
          icon: const Icon(Icons.settings),
          inactiveIcon: const Icon(Icons.settings_outlined),
          iconSize: 28,
          activeColorPrimary: const Color(0xFFFF6600),
          inactiveColorPrimary: const Color(0xFFD8D8D8))
    ];
  }

  @override
  Widget build(BuildContext context) {
    return PersistentTabView(
      context,
      screens: _buildScreens(),
      items: _navBarItems(),
      handleAndroidBackButtonPress: true,
      navBarStyle: NavBarStyle.style14,
      screenTransitionAnimation: const ScreenTransitionAnimation(
        animateTabTransition: true,
        curve: Curves.ease,
        duration: Duration(milliseconds: 200),
      ),
    );
  }
}
