<script
  setup
  lang="ts"
  generic="ITEM extends { id: string | number; [key: string]: unknown }, COLUMN extends TableColumn<keyof ITEM>"
>
import { cn } from '../../../lib/utils'
import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '../pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../table'

import type { TableColumn } from './types'

withDefaults(
  defineProps<{
    rows: ITEM[]
    columns: COLUMN[]
    perPage: number
    total?: number
  }>(),
  {
    total: 0,
  }
)

defineSlots<
  {
    [K in keyof ITEM as K extends string ? `head:${K}` : never]?: (_: { column: COLUMN }) => unknown
  } & {
    [K in keyof ITEM as K extends string ? `cell:${K}` : never]?: (_: { cell: ITEM; column: COLUMN }) => unknown
  } & {
    actions?: () => unknown
  }
>()

defineEmits<{
  'change:page': [page: number]
}>()
</script>

<template>
  <div class="flex w-full flex-1 flex-col gap-y-2 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 p-2">
    <div class="flex justify-between">
      <slot name="actions">
        <div></div>
      </slot>

      <Pagination
        v-slot="{ page }"
        :total="total || rows.length"
        :sibling-count="1"
        show-edges
        :default-page="1"
        :items-per-page="perPage"
        @update:page="$emit('change:page', $event)"
      >
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
          <PaginationPrev />

          <template v-for="(item, index) in items">
            <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
              <Button class="h-9 w-9 p-0" :variant="item.value === page ? 'default' : 'outline'">
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext />
        </PaginationList>
      </Pagination>
    </div>

    <Table class="bg-white" v-if="rows">
      <TableHeader class="sticky top-0 z-50">
        <TableRow>
          <TableHead v-for="column of columns" :key="column.key" :class="cn(column.class)">
            <slot :name="`head:${column.key}`" :column="column">
              {{ column.label }}
            </slot>
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow v-for="row of rows" :key="row.id">
          <TableCell v-for="column of columns" :key="column.key">
            <slot :name="`cell:${column.key}`" :cell="row" :column="column">
              {{ row[column.key] }}
            </slot>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
