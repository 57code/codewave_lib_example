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
    try {
        return await pp.canIUse(apiName);
    } catch (e) {
        console.error(e);
        return false;
    }
}

/**
 * @NaslLogic
 * @type both
 * @title 测试pp接口可用性
 * @desc 测试是否可以调用对应的pp接口
 * @param title api名称
 * @param durationType api名称
 * @returns 返回布尔值
 */
export async function showToast(title: nasl.core.String, durationType:nasl.core.Integer): Promise<nasl.core.Boolean> {
    try {
        // 显示一个持续时间较长的 Toast
        return await pp.showToast({ title: 'Hello POPO.', durationType: 2 });
    } catch (err) {
        console.error(err);
        // catch or throw, this is a question
        return false;
    }
}
/**
 * @NaslLogic
 * @type both
 * @title 测试pp接口可用性
 * @desc 测试是否可以调用对应的pp接口
 * @returns 返回字符串
 */
export function test(): nasl.core.String {
    console.log("test");
    return 'test'
}
