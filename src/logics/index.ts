import '@nasl/types';
import { pp } from "@popo-bridge/web"

export { };

/**
 * @NaslLogic
 * @type both
 * @title 测试pp接口可用性
 * @desc 测试是否可以调用对应的pp接口
 * @param apiName api名称
 * @returns 返回布尔值
 */
export async function canIUse(apiName: nasl.core.String): Promise<nasl.core.Boolean> {
    const res = await pp.canIUse(apiName);
    return res;
}

console.log(canIUse("test"));
