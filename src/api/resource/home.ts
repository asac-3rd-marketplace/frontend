import { baseLocalURL, baseURL } from '@/api/util/instance'

export async function fetchBestItemsData(
  categoryParams: string | null,
  brandParams: string | null,
  priceParams: string | null,
) {
  const res = await fetch(
    `${baseLocalURL}/search/complexitem?status=BESTSELLER${categoryParams ? `&categoryName=${categoryParams}` : ''}${
      brandParams ? `&brand=${brandParams}` : ''
    }${priceParams ? `&priceRange=${priceParams}` : ''}`,
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

export async function fetchNewArrivalsData(
  categoryParams: string | null,
  brandParams: string | null,
  priceParams: string | null,
) {
  // const res = await fetch(`/dummyData/searchResult.json`)
  // const res = await fetch(`${baseURL}/search/complexitem?promotionType=NEW_ARRIVAL`)
  const res = await fetch(
    `${baseLocalURL}/search/complexitem?promotionType=NEW_ARRIVAL&${
      categoryParams ? `&categoryName=${categoryParams}` : ''
    }${brandParams ? `&brand=${brandParams}` : ''}${priceParams ? `&priceRange=${priceParams}` : ''}`,
  )
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  //filter data with params~
  const newArrivals = await res.json()
  return newArrivals
}

export async function fetchNewArrivalsFilterData() {
  const res = await fetch(`${baseURL}/search/counts?promotionType=NEW_ARRIVAL`)
  //localhost:8080/api/search/counts?name=아

  if (!res.ok) {
    throw new Error(`Failed to fetch filter`)
  }
  //filter data with params~~~
  return await res.json()
  //  return filterData
}

export async function fetchBestItemsFilterData() {
  const res = await fetch(`${baseLocalURL}/search/counts?status=BESTSELLER`)
  //localhost:8080/api/search/counts?name=아

  if (!res.ok) {
    throw new Error(`Failed to fetch filter`)
  }
  //filter data with params~~~
  return await res.json()
  //  return filterData
}
