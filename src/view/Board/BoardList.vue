<template>
  <v-content>
    <v-container class="mt-10">
      <v-card>
        <v-card-title>
          Nutrition
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="getBoard.desserts"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          hide-default-footer
          class="elevation-1"
          @page-count="pageCount = $event"
        ></v-data-table>
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import { mapState } from "vuex";
import _ from "lodash";

export default {
  data: () => ({
    search: '',
    page: 1,
    pageCount: 0,
    itemsPerPage: 5,
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'idx',
      },
      { text: '제목', value: 'title' },
      { text: '카테고리', value: 'category' },
      { text: '작성자', value: 'writer' },
      { text: '작성일', value: 'createDate' },
    ],
  }),
  computed: _.extend(mapState(["getBoard"])),

}
</script>

<style>

</style>