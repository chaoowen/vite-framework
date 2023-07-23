<template>
  <h2 class="mb-4 mx-2">{{ $t('page.table.title') }}</h2>
  
  <!-- table regular -->
  <v-card>
    <v-card-title class="text-primary ma-2">
      {{ $t('page.table.tableRegular') }}
    </v-card-title>
    <v-card-text class="d-flex">
      <Table>
        <template #header>
          <th v-for="item in header" :key="item" class="text-left">{{ $t(`page.table.${item}`) }}</th>
        </template>
        <template #body>
          <v-hover v-for="index in 3" :key="index">
            <template v-slot:default="{ isHovering, props }">
              <tr v-bind="props" :class="isHovering ? 'bg-secondary-light' : 'bg-white'">
                <td>{{ body.user }}</td>
                <td>{{ body.date }}</td>
                <td>{{ body.reason }}</td>
                <td>{{ body.editor }}</td>
                <td>{{ body.editDate }}</td>
              </tr>
            </template>
          </v-hover>
        </template>
      </Table> 
    </v-card-text>
  </v-card>

  <!-- table full width -->
  <v-card class="mt-4">
    <v-card-title class="text-primary ma-2">
      {{ $t('page.table.tableFullWidth') }}
    </v-card-title>
    <v-card-text class="d-flex">
      <Table 
        :width="'100%'"
      >
        <template #header>
          <th v-for="item in header" :key="item" class="text-left">{{ $t(`page.table.${item}`) }}</th>
        </template>
        <template #body>
          <v-hover v-for="index in 3" :key="index">
            <template v-slot:default="{ isHovering, props }">
              <tr v-bind="props" :class="isHovering ? 'bg-secondary-light' : 'bg-white'">
                <td>{{ body.user }}</td>
                <td>{{ body.date }}</td>
                <td style="width: 400px;">{{ body.reason }}</td>
                <td>{{ body.editor }}</td>
                <td>{{ body.editDate }}</td>
              </tr>
            </template>
          </v-hover>
        </template>
      </Table> 
    </v-card-text>
  </v-card>

  <!-- table with fixed header -->
  <v-card class="mt-4">
    <v-card-title class="text-primary ma-2">
      {{ $t('page.table.tableWithFixedHeader') }}
    </v-card-title>
    <v-card-text class="d-flex">
      <Table 
        :isHeaderFixed="true"
        :width="'100%'"
        :height="'300px'"
      >
        <template #header>
          <th v-for="item in header" :key="item" class="text-left">{{ $t(`page.table.${item}`) }}</th>
        </template>
        <template #body>
          <v-hover v-for="index in 10" :key="index">
            <template v-slot:default="{ isHovering, props }">
              <tr v-bind="props" :class="isHovering ? 'bg-secondary-light' : 'bg-white'">
                <td>{{ body.user }}</td>
                <td>{{ body.date }}</td>
                <td style="width: 400px;">{{ body.reason }}</td>
                <td>{{ body.editor }}</td>
                <td>{{ body.editDate }}</td>
              </tr>
            </template>
          </v-hover>
        </template>
      </Table> 
    </v-card-text>
  </v-card>
</template>

<script>
import Table from '@/components/common/Table.vue'

export default {
  components: {
    Table
  },
  data() {
    return {
      header: ['user', 'date', 'reason', 'editor', 'editDate'],
      body: {
        user: 'cora',
        date: '2023/05/11',
        reason: 'looking for jobs',
        editor: 'Jason',
        editDate: '2023/06/06',
      }
    }
  }
}
</script>
