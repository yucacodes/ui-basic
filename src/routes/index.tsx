
import type { DocumentHead } from '@builder.io/qwik-city'
import  HomePage  from '../components/home-page/home-page'

export default HomePage

export const head: DocumentHead = {
  title: 'Yuca UI',
  meta: [
    {
      name: 'Yuca UI',
      content: 'Yuca UI Library',
    },
  ],
}
