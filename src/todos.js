// @ts-check
/**
 * @module todos
 * @description 할 일 모듈 입니다.
 */

/**
 * Todo 객체 구성 요소입니다.
 * @typedef {Object} Todo
 * @property {number} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} isComplete - 완료여부
 * @property {string} category - 카테고리
 * @property {Array<string>} [tags] - 태그들
 */
/**
 * @type {Array<Todo>}
 */
let todos = [];

/**
 * <ul><li>1. 할 일을 추가할 수 있습니다.</li><li>2. 내용없이 추가할 수 없습니다.</li></ul>
 * @param {string} content - 할 일을 입력합니다.
 * @returns {Array<Todo>} - 새 할 일(To do)을 반환합니다.
 */
exports.createTodo = (content) => {
  const newId = todos.length + 1;
  const newTodo = {
    id: newId,
    content: content,
    isComplete: false,
    category: "",
    tags: [],
  };
  todos.push(newTodo);
  return [...todos];
};

/**
 * <ul><li>1. ID를 기반으로 특정 할 일을 조회할 수 있습니다.</li></ul>
 * @param {number} [id] - 아이디를 입력합니다.
 * @returns {Array<Todo> | Todo | null} - 새 할 일(To do)을 반환합니다.
 */
exports.getTodo = (id) => {
  if (id === undefined) {
    return [...todos];
  }

  return todos.find((todo) => todo.id === id) || null;
};

/**
 * <ul><li>1. 모든 할 일을 조회할 수 있습니다.</li></ul>
 * @param {number} [id] - 아이디를 입력합니다.
 * @returns {Array<Todo> | Todo | null} - 새 할 일(To do)을 반환합니다.
 */
exports.getTodos = (id) => {
  return [...todos];
};

/**
 * Todo 객체를 수정하기 위한 Payload 입니다.
 * @typedef {Object} Payload
 * @property {string} [content] - 내용
 * @property {boolean} [isComplete] - 완료여부
 * @property {string} [category] - 카테고리
 * @property {Array<string>} [tags] - 태그들
 */

/**
 * <ul><li>1. ID를 제외한 모든 속성을 수정할 수 있습니다.</li><li>2. 특정 할 일의 특정 태그를 수정할 수 있습니다.</li></ul>
 * @param {number} id - 아이디를 입력합니다.
 * @param {Payload} payload - 수정할 객체의 payload를 입력합니다.
 * @returns {Todo | null} - 새 할 일(To do)을 반환합니다.
 */
exports.updateTodo = (id, payload) => {
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return null;
  }

  todos[index] = {
    ...todos[index],
    ...payload,
  };

  return { ...todos[index] };
};

/**
 * <ul><li>1. ID를 기반으로 특정 할 일을 삭제할 수 있습니다.</li></ul>
 * @param {number} id - 아이디를 입력합니다.
 * @returns {Array<Todo> | null} - 새 할 일(To do)을 반환합니다.
 */
exports.deleteTodo = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);

  if (index === -1) {
    return null;
  }

  todos.splice(index, 1);
  return [...todos];
};

/**
 * <ul><li>1. 모든 할 일을 제거할 수 있습니다.</li></ul>
 * @returns {void}
 */
exports.clearTodos = () => {
  todos = [];
};
