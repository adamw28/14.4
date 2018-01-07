var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster:'images/harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster:'images/lion.jpg'
  },
  {
  	id:3,
  	title:'Labirynt fauna',
  	desc:'film o faunie',
    poster:'images/faun.jpg'
  },
  {
  	id:4,
  	title:'Odlot',
  	desc:'film o lataniu domem',
    poster:'images/odlot.jpg'
  },
  {
  	id:5,
  	title:'Gdzie jest Nemo?',
  	desc:'film o tym, jak szukać dzieci',
    poster:'images/nemo.jpg'
  }
];
var Movie = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
        React.createElement('li', {key: this.props.item.id},
        React.createElement('h2', {}, this.props.item.title),
        React.createElement('p', {}, this.props.item.desc),
        React.createElement('img', {src: this.props.item.poster})
      )
    )
  },
});
var Movies = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var movies = this.props.items.map(function(movie) {
        return React.createElement(Movie, {item: movie, key: movie.id});
    });

    return (
      React.createElement('ul', {className: 'moviessList'}, movies)
    );
  }
});

var element = React.createElement(Movies, {items:movies});
  ReactDOM.render(element, document.getElementById('app'));