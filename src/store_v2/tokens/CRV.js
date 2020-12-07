import { ModelToken } from '../../model/index1'
import ABI from './helpers/abi'

export default ModelToken.create({
  code: 'CRV',
  address: process.env.VUE_APP_CRV_TOKEN,
  abi: ABI.ERC20,
})
