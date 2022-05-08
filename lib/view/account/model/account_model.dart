
class User {
  String? email;
  bool? isActive;
  String? fullName;
  int? id;

  User({this.email, this.isActive, this.fullName, this.id});

  User.fromJson(Map<String, dynamic> json) {
    email = json['email'];
    isActive = json['is_active'];
    fullName = json['full_name'];
    id = json['id'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = new Map<String, dynamic>();
    data['email'] = this.email;
    data['is_active'] = this.isActive;
    data['full_name'] = this.fullName;
    data['id'] = this.id;
    return data;
  }
}