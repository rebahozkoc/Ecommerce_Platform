import 'package:flutter/material.dart';

class AddressWidget extends StatelessWidget {
  final double latitude;
  final double longitude;
  const AddressWidget({
    Key? key,
    required this.latitude,
    required this.longitude,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {

    return const SizedBox(
      height: 250,
    );
  }
}
