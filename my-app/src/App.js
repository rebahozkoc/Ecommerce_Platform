import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "./components/responsiveAppBar";
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

// use default theme
// const theme = createTheme();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    secondary: {
      main: '#E6920A'
    },
    primary: {
      main: '#FFFFFF'
  }
},
});

export default function App() {
  console.log("App rendered");
  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor, nisl tristique fringilla finibus, quam est egestas arcu, quis sollicitudin tellus lectus sit amet odio. Mauris hendrerit ullamcorper ornare. Donec cursus pulvinar risus, id semper lacus gravida ac. Praesent ornare mauris nec purus aliquam dapibus. Fusce scelerisque, ipsum quis lobortis cursus, purus ipsum placerat felis, at efficitur nunc neque quis velit. Morbi pellentesque mauris ac pharetra porttitor. Sed ac molestie libero, a vehicula purus. Cras maximus molestie enim sit amet bibendum. Mauris tellus ipsum, condimentum tincidunt dui eget, sodales lobortis magna. Phasellus iaculis, neque ac venenatis laoreet, massa nulla ornare ligula, a condimentum enim dolor vel tellus. Sed et condimentum felis. Ut sodales iaculis feugiat. Aliquam erat volutpat. Nunc vel risus a nisi tempor iaculis sed sit amet est. Nam id efficitur elit.

Vestibulum venenatis velit lacinia, efficitur lorem nec, iaculis lectus. Praesent ultrices sagittis tortor, vitae tristique quam maximus vitae. Sed nec consectetur ligula. Nullam vel tortor nec metus rutrum finibus. Ut tempor nisi nec iaculis elementum. Duis ac ligula quis arcu rhoncus tristique eu et elit. Proin pharetra enim ut sapien tempor cursus. Fusce congue nisi odio, nec ultricies augue bibendum vitae. Morbi ac ultrices felis, non lobortis mi. Sed non purus id elit hendrerit tempor et vitae ligula.

Ut rhoncus in ante ut viverra. Vivamus vitae ipsum a augue sagittis dictum et in eros. Quisque varius mollis ante, a scelerisque purus aliquam eget. Donec facilisis augue sed nisi tempus, mollis tincidunt libero dapibus. In hac habitasse platea dictumst. Duis mattis feugiat turpis id egestas. Aenean vehicula odio eget placerat commodo. Donec ultrices id diam eu lobortis. Ut augue nulla, gravida eu tristique at, aliquam vitae nulla. Donec et lacinia magna, quis porta elit. Ut tempor dignissim urna, eu dignissim lectus. Phasellus at quam id lacus venenatis tincidunt eget non augue. Curabitur accumsan volutpat magna et ullamcorper. Phasellus lectus nibh, laoreet quis egestas quis, dignissim vitae tellus. Morbi ut mauris arcu.

Duis a congue nunc. Donec urna lectus, commodo eget leo id, consectetur cursus augue. Nulla sit amet felis libero. Sed finibus, diam pretium efficitur pellentesque, libero sapien pretium sem, ut vestibulum urna dolor et nunc. Maecenas ligula dui, placerat eu finibus a, sodales sit amet enim. Vestibulum felis nunc, pellentesque non pellentesque vitae, euismod a lacus. Maecenas vitae pellentesque tortor. Phasellus semper leo tincidunt libero luctus maximus. Vivamus dignissim iaculis tempus. Nullam luctus sodales massa, nec tempor libero posuere at. Nam eleifend, orci eu mollis lacinia, mi ipsum posuere turpis, sit amet porta nisi urna in mi. Cras a sapien mi. Sed posuere ornare consequat. Suspendisse lorem massa, efficitur eu quam quis, rutrum pretium ipsum. Sed non condimentum elit, bibendum fermentum ante.

Nulla non ante nec risus vestibulum sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et nisl diam. Integer ac accumsan orci. Pellentesque tempus, neque eget consectetur sagittis, risus augue finibus neque, ac blandit libero est auctor diam. Vivamus accumsan sit amet neque in egestas. Sed varius, velit aliquam vulputate molestie, nibh enim pulvinar turpis, aliquam sagittis quam nunc a ipsum. In eget lacinia sapien. Proin hendrerit at sapien egestas venenatis. Vestibulum turpis lorem, malesuada a augue in, convallis lacinia ligula. Maecenas libero augue, eleifend id facilisis vel, sollicitudin sed nisi. Fusce ut tellus tincidunt, fringilla orci non, gravida magna. Vestibulum rutrum, elit vitae tincidunt ullamcorper, ante diam fermentum purus, a lacinia nisl est tincidunt eros. Duis vitae dignissim nisl. Proin vel varius libero, sed dapibus lectus.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor, nisl tristique fringilla finibus, quam est egestas arcu, quis sollicitudin tellus lectus sit amet odio. Mauris hendrerit ullamcorper ornare. Donec cursus pulvinar risus, id semper lacus gravida ac. Praesent ornare mauris nec purus aliquam dapibus. Fusce scelerisque, ipsum quis lobortis cursus, purus ipsum placerat felis, at efficitur nunc neque quis velit. Morbi pellentesque mauris ac pharetra porttitor. Sed ac molestie libero, a vehicula purus. Cras maximus molestie enim sit amet bibendum. Mauris tellus ipsum, condimentum tincidunt dui eget, sodales lobortis magna. Phasellus iaculis, neque ac venenatis laoreet, massa nulla ornare ligula, a condimentum enim dolor vel tellus. Sed et condimentum felis. Ut sodales iaculis feugiat. Aliquam erat volutpat. Nunc vel risus a nisi tempor iaculis sed sit amet est. Nam id efficitur elit.

Vestibulum venenatis velit lacinia, efficitur lorem nec, iaculis lectus. Praesent ultrices sagittis tortor, vitae tristique quam maximus vitae. Sed nec consectetur ligula. Nullam vel tortor nec metus rutrum finibus. Ut tempor nisi nec iaculis elementum. Duis ac ligula quis arcu rhoncus tristique eu et elit. Proin pharetra enim ut sapien tempor cursus. Fusce congue nisi odio, nec ultricies augue bibendum vitae. Morbi ac ultrices felis, non lobortis mi. Sed non purus id elit hendrerit tempor et vitae ligula.

Ut rhoncus in ante ut viverra. Vivamus vitae ipsum a augue sagittis dictum et in eros. Quisque varius mollis ante, a scelerisque purus aliquam eget. Donec facilisis augue sed nisi tempus, mollis tincidunt libero dapibus. In hac habitasse platea dictumst. Duis mattis feugiat turpis id egestas. Aenean vehicula odio eget placerat commodo. Donec ultrices id diam eu lobortis. Ut augue nulla, gravida eu tristique at, aliquam vitae nulla. Donec et lacinia magna, quis porta elit. Ut tempor dignissim urna, eu dignissim lectus. Phasellus at quam id lacus venenatis tincidunt eget non augue. Curabitur accumsan volutpat magna et ullamcorper. Phasellus lectus nibh, laoreet quis egestas quis, dignissim vitae tellus. Morbi ut mauris arcu.

Duis a congue nunc. Donec urna lectus, commodo eget leo id, consectetur cursus augue. Nulla sit amet felis libero. Sed finibus, diam pretium efficitur pellentesque, libero sapien pretium sem, ut vestibulum urna dolor et nunc. Maecenas ligula dui, placerat eu finibus a, sodales sit amet enim. Vestibulum felis nunc, pellentesque non pellentesque vitae, euismod a lacus. Maecenas vitae pellentesque tortor. Phasellus semper leo tincidunt libero luctus maximus. Vivamus dignissim iaculis tempus. Nullam luctus sodales massa, nec tempor libero posuere at. Nam eleifend, orci eu mollis lacinia, mi ipsum posuere turpis, sit amet porta nisi urna in mi. Cras a sapien mi. Sed posuere ornare consequat. Suspendisse lorem massa, efficitur eu quam quis, rutrum pretium ipsum. Sed non condimentum elit, bibendum fermentum ante.

Nulla non ante nec risus vestibulum sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et nisl diam. Integer ac accumsan orci. Pellentesque tempus, neque eget consectetur sagittis, risus augue finibus neque, ac blandit libero est auctor diam. Vivamus accumsan sit amet neque in egestas. Sed varius, velit aliquam vulputate molestie, nibh enim pulvinar turpis, aliquam sagittis quam nunc a ipsum. In eget lacinia sapien. Proin hendrerit at sapien egestas venenatis. Vestibulum turpis lorem, malesuada a augue in, convallis lacinia ligula. Maecenas libero augue, eleifend id facilisis vel, sollicitudin sed nisi. Fusce ut tellus tincidunt, fringilla orci non, gravida magna. Vestibulum rutrum, elit vitae tincidunt ullamcorper, ante diam fermentum purus, a lacinia nisl est tincidunt eros. Duis vitae dignissim nisl. Proin vel varius libero, sed dapibus lectus.
 </p>
    </div>

    </MuiThemeProvider>
  );
}