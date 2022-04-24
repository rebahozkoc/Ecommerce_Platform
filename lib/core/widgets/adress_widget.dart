import 'package:flutter/foundation.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

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
    CameraPosition _position = CameraPosition(
      target: LatLng(latitude, longitude),
      zoom: 14.4746,
    );

    return SizedBox(
      height: 250,
      child: GoogleMap(
        mapType: MapType.normal,
        initialCameraPosition: _position,
        gestureRecognizers: {
          Factory<OneSequenceGestureRecognizer>(() => ScaleGestureRecognizer()),
        },
        myLocationButtonEnabled: false,
        compassEnabled: false,
        zoomControlsEnabled: false,
        zoomGesturesEnabled: false,
        myLocationEnabled: false,
        mapToolbarEnabled: false,
        
      ),
    );
  }
}
