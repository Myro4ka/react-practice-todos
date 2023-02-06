import { Component } from 'react';
import { Button, Grid, GridItem, Text, CardItem } from 'components';
import SearchFormForImages from 'components/SearchForm/SearchFormForImages';

import * as ImageService from 'service/image-service';

export class Gallery extends Component {
  render() {
    return (
      <>
        <SearchFormForImages />
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        <Grid>
          {/*
    Набір <GridItem></GridItem> із зображеннями
    */}
          <GridItem>
            <CardItem>
              <img src="" alt="" />
            </CardItem>
          </GridItem>
        </Grid>
        <Button>Load more</Button>
      </>
    );
  }
}
