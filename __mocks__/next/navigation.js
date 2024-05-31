// __mocks__/next/navigation.js
const useRouter = jest.fn();
const useSearchParams = jest.fn();

useRouter.mockReturnValue({
  pathname: "/",
  route: "/",
  query: {},
  asPath: "/",
});

useSearchParams.mockReturnValue(new URLSearchParams());

module.exports = {
  useRouter,
  useSearchParams,
};
