const BASE_URL = 'https://decapi.me/youtube/latest_video?'

const USER_ID = 'UCkDwFvETfXmnIwpX7lV3F1g'

const FORMAT = '{"id":"{id}","title":"{title}"}'

const QUERY_PARAMS = 'no_livestream=0&no_shorts=0&skip=1'

const FINAL_URL = `${BASE_URL}id=${USER_ID}&format=${FORMAT}&${QUERY_PARAMS}`

export default FINAL_URL
