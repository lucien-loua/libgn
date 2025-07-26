# Contributing to `libgn`

Thank you for your interest in contributing to `libgn`! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Data Accuracy](#data-accuracy)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

- Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
- Include steps to reproduce the issue
- Provide expected vs actual behavior
- Include your environment details

### Suggesting Enhancements

- Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md)
- Describe the problem you're trying to solve
- Explain why this enhancement would be useful
- Consider alternative solutions

### Contributing Code

- Fork the repository
- Create a feature branch (`git checkout -b feature/amazing-feature`)
- Make your changes
- Add tests for new functionality
- Ensure all tests pass
- Commit your changes (`git commit -m 'Add amazing feature'`)
- Push to the branch (`git push origin feature/amazing-feature`)
- Open a Pull Request

## Development Setup

### Prerequisites

- Node.js (v20 or higher)
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/lucien-loua/libgn.git
cd libgn

# Install dependencies
pnpm install

# Build the project
pnpm build

# Run tests
pnpm test
```

### Available Scripts

- `pnpm build` - Build the project
- `pnpm dev` - Development mode with watch
- `pnpm test` - Run tests
- `pnpm test:run` - Run tests once
- `pnpm test:coverage` - Generate coverage report
- `pnpm lint` - Check code with Biome
- `pnpm lint:fix` - Fix linting issues

## Pull Request Process

1. **Fork and Clone**: Fork the repository and clone your fork
2. **Create Branch**: Create a feature branch from `main`
3. **Make Changes**: Implement your changes
4. **Add Tests**: Include tests for new functionality
5. **Run Tests**: Ensure all tests pass
6. **Lint Code**: Run `pnpm lint:fix` to ensure code quality
7. **Commit**: Write clear commit messages
8. **Push**: Push your changes to your fork
9. **Create PR**: Open a pull request with a clear description

### Commit Message Guidelines

Use conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Test changes
- `chore`: Build/tooling changes

### Pull Request Guidelines

- Use the [pull request template](.github/pull_request_template.md)
- Provide a clear description of changes
- Link related issues
- Ensure all CI checks pass
- Request review from maintainers

## Data Accuracy

Since `libgn` provides geographical and administrative data about Guinea, accuracy is crucial:

### Data Sources

- Use official government sources when possible
- Reference reliable geographical databases
- Cross-reference information from multiple sources
- Document sources in commit messages

### Data Validation

- Verify population figures and areas
- Check spelling of place names
- Ensure administrative hierarchy is correct
- Validate coordinates and boundaries

### Adding New Data

When adding new data:

1. **Research thoroughly** - Use multiple reliable sources
2. **Document sources** - Include references in commit messages
3. **Test thoroughly** - Ensure data is accessible via the API
4. **Update tests** - Add tests for new data
5. **Update documentation** - Reflect changes in README

## Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused
- Use consistent formatting (enforced by Biome)

## Testing

- Write tests for all new functionality
- Maintain high test coverage
- Test edge cases and error conditions
- Ensure tests are fast and reliable

## Documentation

- Update README.md for significant changes
- Add JSDoc comments for new functions
- Update API documentation
- Include examples in documentation

## Questions?

If you have questions about contributing:

1. Check existing issues and discussions
2. Open a new issue with the "question" label
3. Contact maintainers directly

## Recognition

Contributors will be recognized in:

- The project README
- Release notes
- GitHub contributors page

Thank you for contributing to `libgn`! 🇬🇳
