<template>
  <h2 class="mb-4 mx-2">{{ $t('page.form.title') }}</h2>

  <!-- dropdown -->
  <v-card>
    <v-card-title class="text-primary ma-2">
      {{ $t('page.form.dropdown') }}
    </v-card-title>
    <v-card-text class="d-flex align-center">
      <!-- menu -->
      <v-menu>
        <!-- button -->
        <template v-slot:activator="{ props }">
          <v-btn
            color="primary"
            v-bind="props"
          >
            {{ $t('page.form.dropdown') }}
          </v-btn>
        </template>
        <!-- options -->
        <v-list>
          <v-list-item
            v-for="(item, index) in menuItems"
            :key="index"
            @click="menuChooseItem = item"
          >
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- show choose item -->
      <p class="ml-4">{{ menuChooseItem }}</p>
    </v-card-text>
  </v-card>

  <!-- tooltip -->
  <v-card class="mt-4">
    <v-card-title class="text-primary ma-2">
      {{ $t('page.form.tooltip') }}
    </v-card-title>
    <v-card-text class="d-flex">
      <!-- top -->
      <v-tooltip text="top" location="top">
        <template v-slot:activator="{ props }">
          <p v-bind="props">show top tooltip</p>
        </template>
      </v-tooltip>
      <!-- bottom -->
      <v-tooltip text="bottom" location="bottom">
        <template v-slot:activator="{ props }">
          <p class="ml-6" v-bind="props">show bottom tooltip</p>
        </template>
      </v-tooltip>
      <!-- left -->
      <v-tooltip text="left" location="left">
        <template v-slot:activator="{ props }">
          <p class="ml-6" v-bind="props">show left tooltip</p>
        </template>
      </v-tooltip>
      <!-- right -->
      <v-tooltip text="right" location="right">
        <template v-slot:activator="{ props }">
          <p class="ml-6" v-bind="props">show right tooltip</p>
        </template>
      </v-tooltip>
    </v-card-text>
  </v-card>

  <!-- checkbox -->
  <v-card class="mt-4">
    <v-card-title class="text-primary ma-2">
      {{ $t('page.form.checkbox') }}
    </v-card-title>
    <v-card-text>
      <div class="d-flex">
        <v-checkbox label="default"></v-checkbox>
        <v-checkbox label="checked color" color="primary"></v-checkbox>
        <v-checkbox label="disabled" :disabled="true"></v-checkbox>
        <v-checkbox v-model="checkboxTrueFirst" label="checked first" :focused="true"></v-checkbox>
      </div>
      <!-- custom -->
      <p>{{ $t('page.form.customCheckbox') }}</p>
      <v-checkbox class="d-flex">
        <template #prepend>
          <!-- 自定义前置内容，例如图标 -->
          <v-icon>mdi-check</v-icon>
        </template>
        <template #label>
          <!-- 自定义后置内容 -->
          <span>custom checkbox</span>
        </template>
        <template #append>
          <!-- 自定义后置内容 -->
          <v-icon>mdi-alert-circle</v-icon>
        </template>
      </v-checkbox>
    </v-card-text>
  </v-card>

  <!-- radio -->
  <v-card class="mt-4">
    <v-card-title class="text-primary ma-2">
      {{ $t('page.form.radio') }}
    </v-card-title>
    <v-card-text>
      <v-radio-group label="default radio">
        <v-radio label="Radio 1" value="1"></v-radio>
        <v-radio label="Radio 2" value="2"></v-radio>
        <v-radio label="Radio 3" value="3"></v-radio>
      </v-radio-group>
      <v-radio-group inline color="primary" label="horizon radio">
        <v-radio label="Radio 1" value="1"></v-radio>
        <v-radio label="Radio 2" value="2" class="ml-4"></v-radio>
        <v-radio label="disable" value="3" :disabled="true" class="ml-4"></v-radio>
      </v-radio-group>
      <!-- custom -->
      <p>{{ $t('page.form.customRadio') }}</p>
      <v-radio-group v-model="radios" class="mt-4">
        <template v-slot:label>
          <div>{{ $t('page.form.customRadio') }}</div>
        </template>
        <v-radio value="Google">
          <template v-slot:label>
            <div>A for apple</div>
          </template>
        </v-radio>
        <v-radio value="Duckduckgo">
          <template v-slot:label>
            <div>B for Big Mac</div>
          </template>
        </v-radio>
      </v-radio-group>

      <!-- v-model data -->
      <p class="mt-4">v-model data selected item : {{ radioSelected }}</p>
      <div class="mt-4">
        <v-radio-group inline v-model="radioSelected">
          <v-radio label="Radio 1" value="1"></v-radio>
          <v-radio label="Radio 2" value="2"></v-radio>
          <v-radio label="Radio 3" value="3"></v-radio>
        </v-radio-group>
      </div>
    </v-card-text>
  </v-card>

  <!-- select -->
  <v-card class="mt-4">
    <v-card-title class="text-primary ma-2">
      {{ $t('page.form.select') }}
    </v-card-title>
    <v-card-text>
      <!-- default -->
      <div class="d-flex">
        <!-- single select -->
        <Select
          type="default"
          :label="$t('page.form.selectSingle')"
          :items="selectItems"
          :placeholderTitle="'choose place name'"
          :width="'200'"
        />
        <!-- multiple select -->
        <Select
          type="default"
          :label="$t('page.form.selectMultiple')"
          :items="selectItems"
          :isMultiple="true"
          :width="'300'"
          class="ml-4"
        />  
        <!-- disabled select -->
        <Select
          type="default"
          :label="$t('button.disabled')"
          :items="selectItems"
          :isMultiple="true"
          :isDisabled="true"
          :width="'100'"
          class="ml-4"
        /> 
      </div>

      <!-- outlined -->
      <div class="d-flex mt-4">
        <!-- single select -->
        <Select
          type="outlined"
          :label="$t('page.form.selectSingle')"
          :items="selectItems"
          :placeholderTitle="'choose place name'"
          :width="'200'"
        />
        <!-- multiple select -->
        <Select
          type="outlined"
          :label="$t('page.form.selectMultiple')"
          :items="selectItems"
          :isMultiple="true"
          :width="'300'"
          class="ml-4"
        />  
        <!-- disabled select -->
        <Select
          :label="$t('button.disabled')"
          :items="selectItems"
          :isMultiple="true"
          :isDisabled="true"
          :width="'100'"
          class="ml-4"
        /> 
      </div>
      <!-- color -->
      <div class="d-flex mt-4">
        <!-- single select -->
        <Select
          type="color"
          :color="'primary-light'"
          :label="$t('page.form.selectSingle')"
          :items="selectItems"
          :placeholderTitle="'choose place name'"
          :width="'200'"
          @change="selectSingleItem = $event"
        />
        <!-- multiple select -->
        <Select
          type="color"
          :color="'primary-light'"
          :label="$t('page.form.selectMultiple')"
          :items="selectItems"
          :isMultiple="true"
          :width="'300'"
          class="ml-4"
          @change="selectMultipleItem = $event"
        />  
        <!-- disabled select -->
        <Select
          type="color"
          :color="'primary-light'"
          :label="$t('button.disabled')"
          :items="selectItems"
          :isMultiple="true"
          :isDisabled="true"
          :width="'100'"
          class="ml-4"
        /> 
      </div>
      <!-- v-model data -->
      <p class="mt-4">v-model data</p>
      <div class="mt-4">
        <!-- single select -->
        <div class="d-flex align-center">
          <Select
            type="color"
            :color="'primary-light'"
            :label="$t('page.form.selectSingle')"
            :items="selectItems"
            :placeholderTitle="'choose place name'"
            :width="'200'"
            @change="selectSingleItem = $event"
            class="flex-0-0"
          />
          <div class="ml-4">{{ selectSingleItem }}</div>
        </div>
        
        <!-- multiple select -->
        <div class="d-flex align-center mt-4">
          <Select
            type="color"
            :color="'primary-light'"
            :label="$t('page.form.selectMultiple')"
            :items="selectItems"
            :isMultiple="true"
            :width="'300'"
            @change="selectMultipleItem = $event"
            class="flex-0-0"
          /> 
          <div class="ml-4" v-for="item in selectMultipleItem" :key="item">
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Select from '@/components/common/Select.vue'
export default {
  components: {
    Select
  },
  data() {
    return {
      checkboxTrueFirst: true,
      radios: '',
      radioSelected: '',
      menuItems: ['sunday', 'monday', 'tuesday', 'wednesday',],
      menuChooseItem: '',
      selectItems: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
      selectSingleItem: '',
      selectMultipleItem: []
    }
  }
}
</script>
