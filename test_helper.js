const { AppBar, Toolbar, Typography } = require("@mui/material");
const Header = require("./src/components/Header");

describe("Header component", () => {
  it("should render without throwing an error", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(AppBar)).to.have.lengthOf(1);
    expect(wrapper.find(Toolbar)).to.have.lengthOf(1);
    expect(wrapper.find(Typography)).to.have.lengthOf(1);
  });

  it("should display the correct text", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Typography).text()).to.equal("Scotia Wealth");
  });
});

require.extensions[".svg"] = function () {
  return null;
};
require.extensions[".css"] = function () {
  return null;
};

require("babel-polyfill");
require("babel-register");

var enzyme = require("enzyme");
var Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });
