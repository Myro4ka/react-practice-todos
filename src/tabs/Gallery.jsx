import { Component } from 'react';
import { Button, Grid, GridItem, Text, CardItem } from 'components';
import SearchFormForImages from 'components/SearchForm/SearchFormForImages';

import * as ImageService from 'service/image-service';
export class Gallery extends Component {
  state = {
    photos: [],
  };

  async componentDidMount() {
    const { photos } = await ImageService.getImages();
    this.setState({ photos });
  }

  handleSearchSubmit = async query => {
    const { photos } = await ImageService.getImages(query);
    this.setState({ photos });
  };

  render() {
    return (
      <>
        <SearchFormForImages onSubmit={this.handleSearchSubmit} />
        {this.state.photos.length === 0 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        <Grid>
          {this.state.photos.map(({ id, avg_color, src, alt }) => (
            <GridItem key={id}>
              <CardItem color={avg_color}>
                <img src={src.large} alt={alt} />
              </CardItem>
            </GridItem>
          ))}
        </Grid>
        {this.state.photos.length >= 15 && <Button>Load more</Button>}
      </>
    );
  }
}
