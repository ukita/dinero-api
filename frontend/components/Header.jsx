import React from "react";
import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import NextLink from "next/link";

import { Header as LayoutHeader, Flex } from "./Layout";
import { Link } from "./Typography";
import Button from "./Button";

import Logo from "../assets/svg/logo.svg";

const BorderHeader = styled(LayoutHeader)`
  border-top: 4px solid ${themeGet("colors.primary")};
  box-shadow: ${themeGet("boxShadows.md")};
`;

function Header() {
  return (
    <BorderHeader
      bg="background"
      boxShadow="lg"
      alignItems="center"
      py={2}
      px={3}
    >
      <Flex
        flexGrow={1}
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        maxWidth={1280}
      >
        <NextLink href="/">
          <Link href="/">
            <Logo
              width="50px"
              height="auto"
              style={{ verticalAlign: "middle" }}
            />
          </Link>
        </NextLink>
        <Flex alignItems="center">
          <NextLink href="/login">
            <Button as="a" scale="sm" variant="tertiary" mx={1}>
              Login
            </Button>
          </NextLink>
          <NextLink href="/signup">
            <Button as="a" scale="sm" mx={1}>
              Signup
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </BorderHeader>
  );
}

export default Header;
